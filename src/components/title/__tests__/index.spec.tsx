import { render, screen } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import Title from "..";

import messages from '../../../../compiled-lang/en.json';

describe("title tests", () => {
  it("should be render", () => {
    const { getByText } = render(
        <IntlProvider locale="en" messages={messages}>
            <Title />
        </IntlProvider>
    );

    const text = screen.getByText(/This is a title/i);

    expect(text).toBeInTheDocument();
  });
});
