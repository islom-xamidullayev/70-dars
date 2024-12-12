import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

// i18n konfiguratsiyasi
i18n.use(initReactI18next).init({
  resources: {
    rus: {
      translation: {
        location: "Ташкент",
        punkt: "Пункты выдачи",
        become: "Стать продавцом",
        opeN: "Открыть пункт выдачи",
        question: "Вопрос-ответ",
        order: "Мои заказы",
        card: "Популярное",
      },
    },
    uz: {
      translation: {
        location: "Toshkent",
        punkt: "Topshirish punkti",
        become: "Sotuv bo'limi",
        opeN: "Topshirish punktini ochish",
        question: "Savol-javob",
        order: "Buyurtmalarim",
        card: "Mashhur",
      },
    },
  },
  lng: "uz", // Default til
  fallbackLng: "uz", // Agar til topilmasa, uz ishlatiladi
  interpolation: {
    escapeValue: false, // XSS himoyasi
  },
});

export default function I18() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("uz");

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <>
      <div className="w-[1350px] m-auto p-4 flex gap-10 items-center justify-center">
        <h2 className="text-2xl font-bold">{t("location")}</h2>
        <p>{t("punkt")}</p>
        <p>{t("become")}</p>
        <p>{t("opeN")}</p>
        <p>{t("question")}</p>
        <p>{t("order")}</p>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={() => handleLanguageChange("uz")}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            cursor: "pointer",
            background: language === "uz" ? "#4CAF50" : "#f0f0f0",
            color: language === "uz" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
          }}
        >
          O'zbekcha
        </button>
        <button
          onClick={() => handleLanguageChange("rus")}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            background: language === "rus" ? "#4CAF50" : "#f0f0f0",
            color: language === "rus" ? "#fff" : "#000",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Русский
        </button>
        <br />
        <br />
        <p className="text-[22px]">{t("card")}</p>
      </div>
    </>
  );
}

// Root komponentni DOM ga qo'shish
const root = createRoot(document.getElementById("root"));
root.render(<I18 />);
