import sum from "./sum";

it("When x & y is a number",()=>{
    const res = sum(4,5);

    //res= 9
    expect(res).toBe(9);
});

it("When x & y is a String",()=>{
    const res = sum("4","5");

    
    expect(res).toBe(9);
});
it("When x & y is a decimal",()=>{
    const res = sum(5.3,5);

    //res= 10.3
    expect(res).toBe(10.3);
});