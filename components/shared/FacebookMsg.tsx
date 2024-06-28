"use client";

import React, { Component } from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMsg = () => {
  return (
    <FacebookProvider appId="7358238674284379" chatSupport>
      <CustomChat pageId="109808231457583" minimized={true} />
    </FacebookProvider>
  );
};

export default FacebookMsg;
