"use client";

import React, { Component } from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMsg = () => {
  return (
    <FacebookProvider appId="448306871401171" chatSupport>
      <CustomChat pageId="359215318019618" minimized={true} />
    </FacebookProvider>
  );
};

export default FacebookMsg;
