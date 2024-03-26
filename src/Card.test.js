import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", () => {
    render(<Card caption={TEST_IMAGES[0].caption} src={TEST_IMAGES[0].src} currNum={TEST_IMAGES.indexOf(TEST_IMAGES[0]) + 1} totalNum={TEST_IMAGES.length}/>);
});

it("matches snapshot for first element", () => {
    const { asFragment } = render(<Card caption={TEST_IMAGES[0].caption} src={TEST_IMAGES[0].src} currNum={TEST_IMAGES.indexOf(TEST_IMAGES[0]) + 1} totalNum={TEST_IMAGES.length}/>);
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot for second element", () => {
    const { asFragment } = render(<Card caption={TEST_IMAGES[1].caption} src={TEST_IMAGES[1].src} currNum={TEST_IMAGES.indexOf(TEST_IMAGES[1]) + 1} totalNum={TEST_IMAGES.length}/>);
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot for third element", () => {
    const { asFragment } = render(<Card caption={TEST_IMAGES[2].caption} src={TEST_IMAGES[2].src} currNum={TEST_IMAGES.indexOf(TEST_IMAGES[2]) + 1} totalNum={TEST_IMAGES.length}/>);
    expect(asFragment()).toMatchSnapshot();
});