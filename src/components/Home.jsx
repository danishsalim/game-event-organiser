import Games from "./Games";
import { useAuth0 } from "@auth0/auth0-react";

function HomePage() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <div className="home-container">
      <h1>Welcome to Event Game Booking!</h1>
      {isAuthenticated ? (
                <>
                  <button
                    className="new-task-submit"
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Log Out
                  </button>
                  <Games />
                </>      
                ) : (
                  <button
                    className="button"
                    onClick={() => loginWithRedirect()}
                  >
                    Log In 
                  </button>
                )}
    </div>
  );
}

export default HomePage;
