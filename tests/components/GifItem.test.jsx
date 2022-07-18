import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Prueba en <GifItem />', () => {

  const title = 'Saitma';
  const url   = 'https://www.google.com/search?q=saitama&rlz=1C1ALOY_esNI998NI998&oq=saitam&aqs=chrome.1.69i57j0i433i512j0i131i433i512j0i512l7.5552j0j7&sourceid=chrome&ie=UTF-8';

  test('debe de hacer math con el snapShot ', () => {

    const { container } = render( <GifItem title={ title } url={ url }/>)
    expect( container ).toMatchSnapshot();
  });

  test('Debe de mostart la imagen con el url y alt indicado', () => {
    render( <GifItem title={title} url={ url }/>);
    //screen.debug();
    //expect( screen.getByRole('img').scr).toBe( url );
    const { src, alt }= screen.getByRole('img');
    expect( src ).toBe( url );
    expect( alt ).toBe( alt );
  });

  test('should de mostart el titulo en el compoeente ', () => {
    render( <GifItem title={title} url={ url }/>);
    expect( screen.getByText( title )).toBeTruthy();
  });
  

})
