import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key';

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null;
  }
}

export function isAuthenticated(request) {
  const token = request.cookies.get('auth-token');
  if (!token) return false;
  const decoded = verifyToken(token);
  return decoded ? true : false;
}

export function getUserRole(request) {
  const token = request.cookies.get('auth-token');
  if (!token) return null;
  const decoded = verifyToken(token);
  return decoded ? decoded.role : null;
}
