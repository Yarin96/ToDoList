import { create } from "zustand";
import { getTodosGroupedByColumn } from "@/lib/getTodosGroupedByColumn";
import { databases } from "@/appwrite";

interface BoardState {
  board: Board;
  getBoard: () => void;
  setBoardState: (board: Board) => void;
  updateTodoInDB: (todo: Todo, columnId: TypedColumn) => void;
  newTaskInput: string;
  newTaskType: TypedColumn;
  setNewTaskInput: (input: string) => void;
  setNewTaskType: (columnId: TypedColumn) => void;
  searchString: string;
  setSearchString: (searchString: string) => void;
  // deleteTask: (taskIndex: number, todoId: Todo, id: TypedColumn) => void;
}

export const useBoardStore = create<BoardState>((set, get) => ({
  board: {
    columns: new Map<TypedColumn, Column>(),
  },
  newTaskInput: "",
  newTaskType: "todo",
  searchString: "",
  setSearchString: (searchString) => set({ searchString }),

  getBoard: async () => {
    const board = await getTodosGroupedByColumn();
    set({ board });
  },

  setBoardState: (board) => set({ board }),

  setNewTaskInput: (input: string) => set({ newTaskInput: input }),
  setNewTaskType: (columnId: TypedColumn) => set({ newTaskType: columnId }),

  // deleteTask: async (taskIndex: number, todo: Todo, id: TypedColumn) => {
  //   const newColumns = new Map(get().board.columns);
  //   newColumns.get(id)?.todos.splice(taskIndex, 1);
  //   set({ board: {columns: newColumns }});

  //   if (todo.image) {
  //     await storage.deleteFile(todo.image,bucketId, todo.image.fileId);
  //   }

  //   await databases.deleteDocument(
  //     proccess.env.NEXT_PUBLIC_DATABASE_ID!,
  //     proccess.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
  //     todo.$id
  //   );
  // },

  updateTodoInDB: async (todo, columnId) => {
    await databases.updateDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
      todo.$id,
      {
        title: todo.title,
        status: columnId,
      }
    );
  },
}));
