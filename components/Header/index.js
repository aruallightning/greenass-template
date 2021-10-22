import React from "react";
import { useFela } from "react-fela";
import ReactMarkdown from "react-markdown";
import Title from "../Title";
import content from "../../_data/landing-page.json";
import styles from "./styles";
import Paragraph from "../Paragraph";
import Navigation from "../Navigation";

const Header = () => {
  const { css } = useFela();
  const { headerImage, title, description } = content;

  return (
    <header className={css(styles.header({ headerImage }))}>
      <Navigation />

      <div className={css(styles.container)}>
        <Title expandStyles={{ fontSize: "7.5em" }}>{title}</Title>
        <Paragraph expand={{ maxWidth: "40ch", fontSize: "2.4em" }}>
          <ReactMarkdown>{description}</ReactMarkdown>
        </Paragraph>
      </div>
    </header>
  );
};

export default Header;