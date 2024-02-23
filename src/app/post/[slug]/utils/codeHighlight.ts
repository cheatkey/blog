import dark from "./dark.json";

export const codeHighlightOption = {
  theme: dark,
  keepBackground: false,

  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node: any) {
    if (!node.properties.className) {
      node.properties.className = ["line--highlighted"];
    } else {
      node.properties.className.push("line--highlighted");
    }
  },
  onVisitHighlightedWord(node: any) {
    node.properties.className = ["word"];
  },
};
