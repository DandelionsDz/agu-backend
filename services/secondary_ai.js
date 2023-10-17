const baseUrl = "https://chat.chatgptdemo.net/chat_api_stream";

class AI {
  static async getAIAnswer(payload) {
    return fetch(baseUrl, {
      headers: {
        accept: "*/*",
        "accept-language":
          "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5",
        "content-type": "application/json",
        "sec-ch-ua":
          '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        cookie:
          "_ga=GA1.1.1616556768.1697542046; _ga_3J2500708C=GS1.1.1697542045.1.0.1697542045.0.0.0; dom3ic8zudi28v8lr6fgphwffqoz0j6c=2a6fe89a-868f-4951-8db2-7a613a84dc04%3A3%3A1; session=eyJ1c2VyX2lkIjogImpxeTlhcDljMnVqZ3lzdjR1In0=.ZS5vow.sywMgGbNRfuATHS6lJTp8J1fAV0",
        Referer: "https://chat.chatgptdemo.net/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: payload,
      method: "POST",
    })
      .then((res) => res.text())
      .then((text) => text.split("\n"));
  }

  static async createChatRoom() {
    return fetch("https://chat.chatgptdemo.net/new_chat", {
      headers: {
        accept: "*/*",
        "accept-language":
          "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5",
        "cache-control": "max-age=0",
        "content-type": "application/json",
        "sec-ch-ua":
          '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        cookie:
          "_ga=GA1.1.1616556768.1697542046; _ga_3J2500708C=GS1.1.1697542045.1.0.1697542045.0.0.0; dom3ic8zudi28v8lr6fgphwffqoz0j6c=2a6fe89a-868f-4951-8db2-7a613a84dc04%3A3%3A1; session=eyJ1c2VyX2lkIjogImpxeTlhcDljMnVqZ3lzdjR1In0=.ZS5vow.sywMgGbNRfuATHS6lJTp8J1fAV0",
      },
      referrerPolicy: "no-referrer",
      body: '{"user_id":"hfrgwhyciupb3i2ho"}',
      method: "POST",
    }).then((res) => res.json());
  }
}

class Utils {
  static getQuestion(content, chatRoomId = "652e6f9fc728f26aae4b1a01") {
    let payload = {
      question: content,
      chat_id: chatRoomId,
      timestamp: 1696985122202,
    };

    return JSON.stringify(payload);
  }

  static getMessageFromData(data) {
    let message = "";

    data.forEach((line) => {
      if (line.includes("data: {")) {
        const data = JSON.parse(line.replace("data: ", ""));
        const content = data.choices[0].delta.content;
        if (content) {
          message += content;
        }
      }
    });

    return message;
  }
}

exports.secondaryAI = AI;
exports.secondaryUtils = Utils;
