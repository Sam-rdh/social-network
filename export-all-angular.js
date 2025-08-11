const fs = require("fs");
const path = require("path");

// Répertoire de départ (adapter si besoin)
const rootDir = path.join(__dirname, "src");
const outputFile = path.join(__dirname, "export_angular_code.txt");

function listFiles(dir, arr = []) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      listFiles(fullPath, arr);
    } else {
      arr.push(fullPath);
    }
  });
  return arr;
}

function main() {
  const files = listFiles(rootDir);
  let result = "";
  files.forEach((file) => {
    const relPath = path.relative(__dirname, file);
    result += "\n\n===============================\n";
    result += `// FICHIER: ${relPath}\n`;
    result += "===============================\n\n";
    try {
      result += fs.readFileSync(file, "utf-8");
    } catch (e) {
      result += "[ERREUR DE LECTURE]";
    }
  });

  fs.writeFileSync(outputFile, result, "utf-8");
  console.log(`✅ Export terminé dans ${outputFile}`);
}

main();