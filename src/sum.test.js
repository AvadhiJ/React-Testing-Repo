import sum from "./sum";

if("When x & y is a number",()=>{
    const res = sum(4,5);

    //res= 9
    expect(res).toBe(9);
});