import React, { forwardRef } from "react";
import { Avatar, Listbox, ListboxItem, Link } from "@nextui-org/react";
import { ConfigIcon, HomeIcon, UserIcon } from "../utils/Icons";

const SideBar = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="w-64 bg-white p-8 flex flex-col items-center"
      {...props}
    >
      <h1 className="text-2xl font-bold mb-8">CHRISVDEV9</h1>
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" size="lg" />
      <p className="text-sm text-gray-400 mt-4">Bienvenido de vuelta,</p>
      <p className="font-bold">Juan Simora</p>
      <Listbox>
        <ListboxItem
          className="mb-4 mt-10 text-blue-500 p-3"
          startContent={<HomeIcon className="w-4 h-4" />}
        >
          Dashboard
        </ListboxItem>
        <ListboxItem
          startContent={<UserIcon className="w-4 h-4" />}
          className="mb-4 p-3"
        >
          Perfil
        </ListboxItem>
        <ListboxItem
          className="p-3"
          startContent={<ConfigIcon className="w-4 h-4" />}
        >
          Configuración
        </ListboxItem>
      </Listbox>
      <div className="mt-[100%]">
        {" "}
        <p className=" text-sm">
          Created by{" "}
          <strong>
            <Link
              className="text-black text-sm"
              isExternal
              href="https://github.com/Chrisvd9"
            >
              Chrisvdev9 &copy;
            </Link>
          </strong>
        </p>
      </div>
    </div>
  );
});

export default SideBar;
