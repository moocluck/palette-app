import { memo } from 'react';
import FooterStyles from './Footer.styles';
import { Paragraph } from '../../01-Atoms/Paragraph/Paragraph.styles';

function Footer() {
  return (
    <FooterStyles>

      <Paragraph weight='400' large>
        Этот сервис создан, чтобы упросить жизнь дизайнеров. Основная задумка — компиляция инструментов для работы с цветами и текстом в одном месте, чтобы ускорить процесс разработки.
      </Paragraph>

      <Paragraph weight='400' large>
        © Palette Design 2023
      </Paragraph>

    </FooterStyles>

  );
}

export default memo(Footer);
