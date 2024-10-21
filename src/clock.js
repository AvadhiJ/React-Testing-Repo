// if you have a Clock component that uses Date.now(), the snapshot generated from this component will be different every time the test case is run. In this case we can mock the Date.now() method to return a consistent value every time the test is run:

// Copyright (c) Meta Platforms, Inc. and affiliates.. All Rights Reserved.

import {useEffect, useState} from 'react';

export default function Clock() {
  const [seconds, setSeconds] = useState(Date.now() / 1000);

  const tick = () => {
    setSeconds(Date.now() / 1000);
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => clearInterval(timerID);
  }, []);

  return <p>{seconds} seconds have elapsed since the UNIX epoch.</p>;
}