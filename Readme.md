# 📌 Import & Export in JavaScript (For React Developers)

JavaScript modules allow you to split your code across multiple files and reuse logic cleanly.  
React projects heavily depend on import/export for components, hooks, utils, and constants.

---

## ⭐ 1. Why Modules?

- Code ko separate files mein organize karne ke liye  
- Reusability badhta hai  
- Maintainability improve hoti hai  
- React mein har component ek module hota hai  

---

## ⭐ 2. Types of Exports

JavaScript mein do main tarike:

1. **Named Export**  
2. **Default Export**

Dono ka purpose alag hota hai.


## ⭐ 11. Common Mistakes Students Make

1. ❌ Missing file extension
→ React automatically resolves .js but not .json.

2. ❌ Wrong path
→ "./" (current folder), "../" (back folder)

3. ❌ Braces misuse

Named import → { }

Default import → No { }

4. ❌ Trying multiple default exports
→ Error