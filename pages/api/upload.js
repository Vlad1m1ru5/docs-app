import { IncomingForm } from "formidable";

export default function (req, res) {
  const incomingForm = new IncomingForm();
  incomingForm.parse(req, (err, fields, files) => {
    if (err) {
      const { message } = err;
      return res.status(500).json({ message });
    }

    console.log(files);
  });
  return res.status(200).json({ message: "Uploaded" });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
