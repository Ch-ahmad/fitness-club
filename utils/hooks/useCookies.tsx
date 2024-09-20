const useCookies = () => {
  const apiUrl = "/api/auth";

  async function setCookies(token: string, role: string) {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify({ token, role }),
      });
      if (!response.ok) {
        throw new Error("Failed to set cookies");
      }
    } catch (error) {
      console.error("Error setting cookies:", error);
    }
  }

  async function getCookie() {
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to get cookie");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error getting cookie:", error);
      return null;
    }
  }

  async function deleteCookie() {
    try {
      const response = await fetch(apiUrl, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete cookie");
      }
    } catch (error) {
      console.error("Error deleting cookie:", error);
    }
  }

  return {
    setCookies,
    getCookie,
    deleteCookie,
  };
};

export default useCookies;
