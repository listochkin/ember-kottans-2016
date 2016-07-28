function escapeRegExp(s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

export default function equalIgnoreCase(a, b) {
  const escapedA = escapeRegExp(a.trim());
  const searchRegExp = new RegExp('^' + escapedA + '$', 'i');
  return searchRegExp.test(b.trim());
}
