import styles from "../../src/components/Index.module.css";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Index() {
  const [lang, setLang] = useState("EN");
  const navigate = useNavigate();
  const { lang: selectedLang } = useParams();

  useEffect(() => {
    if (selectedLang) {
      setLang(selectedLang.toUpperCase());
    }
  }, [selectedLang]);

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang.toUpperCase());
    navigate(`/Index/${selectedLang}`);
  };

  const To_page_cus_all = () => {
    navigate(`/menu/all/${lang}`);
  };

  // รายการภาษาและข้อความตามภาษา
  const languageOptions = [
    { value: "EN", label: "England" },
    { value: "CN", label: "China" },
    { value: "TH", label: "Thai" },
    { value: "KR", label: "Korea" },
  ];

  return (
    <div className={styles.mobile}>
      <div className={styles.lang}>
        <select
          className={styles.selectOption}
          value={lang}
          onChange={handleLanguageChange}
        >
          {languageOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.footer}>
        <button className={styles.button} onClick={To_page_cus_all}>
          {lang === "EN" && "Eat in"}
          {lang === "CN" && "吃在"}
          {lang === "TH" && "รับประทานที่ร้าน"}
          {lang === "KR" && "식당에서 먹기"}
        </button>

        <button className={styles.button} onClick={To_page_cus_all}>
          {lang === "EN" && "Take away"}
          {lang === "CN" && "外卖"}
          {lang === "TH" && "กลับบ้าน"}
          {lang === "KR" && "테이크 아웃"}
        </button>
      </div>
    </div>
  );
}
