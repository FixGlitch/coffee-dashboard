export const hashPassword = async (password: string): Promise<string> => {
  return password;
};

export const comparePasswords = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return password === hashedPassword;
};
