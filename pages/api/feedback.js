import fs, { readFileSync } from "fs";
import path from "path";

function buildFeedPath() {
  return path.join(process.cwd(), "data", "feedback.json");
}

function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      feedback: feedbackText,
    };
    // Store that to any database ot any file
    const filePath = buildFeedPath();
    const data = extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));

    res
      .status(201)
      .json({ Message: "This is Api Route", feedback: newFeedback });
  } else {
    const filePath = buildFeedPath();
    const data = extractFeedback(filePath);
    res.status(200).json({ feedback: data });
  }
}
export default handler;
