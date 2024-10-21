import {render}from '@testing-library/react';

import LoginSubmission  from "./login-submission";
 
test("snapshot from login compnent",()=>{
    const container = render(<LoginSubmission />);
    expect(container).toMatchSnapshot();
})
