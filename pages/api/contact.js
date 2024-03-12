const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN
});

export default async (req, res) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ msg: "Apenas solicitações POST são permitidas" });
  }
  try {
    const { name, email, subject, message } = JSON.parse(req.body);
    await notion.pages.create({
      parent: {
        type: "database_id",
        database_id: process.env.NOTION_DATABASE_ID
      },
      properties: {
        Nome: {
          title: [
            {
              text: {
                content: name
              }
            }
          ]
        },
        Email: {
          rich_text: [
            {
              text: {
                content: email
              }
            }
          ]
        },
        Subject: {
          rich_text: [
            {
              text: {
                content: subject
              }
            }
          ]
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message
              }
            }
          ]
        }
      }
    });
    res.status(201).json({ msg: "Sucesso" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Falho" });
  }
};
