interface UserMessage {
  type: "user";
  userId: number;
  username: string;
}

export type { UserMessage };
