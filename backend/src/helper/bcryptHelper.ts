import bcrypt from "bcrypt";

const hashPassword = async (password: string): Promise<String> => {
  try {
    const saltRound: number = 5;
    let hash = await bcrypt.hash(password, saltRound);
    return hash;
  } catch (error) {
    console.log(error);
    throw new Error("Password hasing failed");
  }
};

const compareHashPassword = async (
  password: string,
  hashPassword: string
): Promise<boolean> => {
  try {
    const isMatch = bcrypt.compare(password, hashPassword);
    return isMatch;
  } catch (error) {
    throw new Error("Password comparison failed");
  }
};

export { hashPassword, compareHashPassword };
