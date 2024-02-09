import {render} from '@testing-library/react';
import '@testing-library/jest-dom'

import { ActivityLabel } from "./ActivityLabel";

describe("ActivityLabel", () => {
  it("should show the accepted label", () => {
    const { container } = render(<ActivityLabel status="ACCEPTED" />);
    expect(container.textContent).toBe("Accepted");
  })

  it("should return no content if no label is passed", () => {
    const { container } = render(<ActivityLabel status={undefined} />);
    expect(container).toBeEmptyDOMElement();
  })
});