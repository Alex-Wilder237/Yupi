// src/components/common/Button.js
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

const Buttonbox = () => {
  return (
    <Dropdown>
      <DropdownTrigger className="bg-[#D6E6FF] px-8 py-7 lg:px-[60px] lg:py-8  rounded-full text-[10px] lg:text-lg">
        <Button  
        >
          Contact
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" className="p-2">
        <DropdownItem ><a className="text-xl" href="https://wa.me/qr/7FQWSAE44PB3O1">Whatsapp</a></DropdownItem>
        <DropdownItem ><a className="text-xl" href="https://www.facebook.com/profile.php?id=61557884797345">Facebook</a></DropdownItem>
        <DropdownItem ><a className="text-xl" href="https://www.linkedin.com/in/awaken-yoga-47b1b831a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Linkedin</a></DropdownItem>
        <DropdownItem ><a className="text-xl" href="https://youtube.com/@awakenyogastudio-j9s?si=a5maiFLVKvT7KL4F">Youtube</a></DropdownItem>
        
      </DropdownMenu>
    </Dropdown>
  );
};

export default Buttonbox;
