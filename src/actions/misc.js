export const CHANGE_URL = 'CHANGE_URL';

export function changeUrl(path, location) {
  return { type: CHANGE_URL, path: path, existingPath: location };
}
