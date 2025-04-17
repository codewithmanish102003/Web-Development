export const getAuthUser = async () => {
    const res = await fetch("/api/auth/me", { credentials: "include" });
    const data = await res.json();
    return data.user || null;
  };
  