export class GlobalConstants {
  public static genericError: string = "Something went wrong. Please try again later.";

public static unauthorized: string = "You are not authorized person to access this page."

  public static nameRegex: string = "[a-zA-Z0-9 ]*";

  public static emailRegex: string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";

  // Corrected contactRegex pattern
  public static contactRegex: string = "[0-9]{10,10}$";

  public static error: string = "error";
}