function validSpacing(s) {
    return s.trim() == s && !s.includes("  ");
  }
console.log(validSpacing('V    LeS D'));