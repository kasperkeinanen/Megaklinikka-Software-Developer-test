import static spark.Spark.*;
import org.apache.commons.codec.digest.DigestUtils;
import org.json.*;

public class Main {
    public static void main(String[] args) {
        /*
        The function takes in a Json object from the body of the request and parses it.
        The string sent in the body's Json object is stored in the String variable text.
        The variable text is the encoded into sha256 hex and returned in the Json object
        hashObject with the HTTP status code 200. If there is no "text" in the body
        received in the response, then the function returns the error Json object and
        the HTTP status code 400.
        Input: args
        Output: hashObject, error
         */
        post("/hash",(request, response) -> {
            response.type("application/json");
            JSONObject obj = new JSONObject(request.body());
            String text;
            try {
                text = obj.getString("text");
            }
            catch (Exception e){
                response.status(400);
                String message = "{\"errorMessage\": \"Bad Input\"}";
                JSONObject error = new JSONObject(message);
                return error;
            }
            String sha256hex = DigestUtils.sha256Hex(text);

            String str = String.format("{\"hash\": %s}", sha256hex);
            JSONObject hashObject = new JSONObject(str);
            return hashObject;
        });
    }
}