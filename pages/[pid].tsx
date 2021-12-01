import { TableConfig } from "index";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

const Page = (): JSX.Element => {
  const [configs, setConfigs] = useState<TableConfig[]>([]);
  const router = useRouter();
  const { pid } = router.query;
  let configNumber = 0;

  const calculateConfigNumber = (pid: string): number => {
    const configNumber = Number(pid);
    if (configNumber === 1) {
      return 1;
    } else if (1 < configNumber && configNumber % 2 === 0) {
      return 2;
    } else if (1 < configNumber && configNumber % 2 === 1) {
      return 3;
    } else {
      return 0;
    }
  };

  if (typeof pid == "string") {
    configNumber = calculateConfigNumber(pid);
  } else {
    configNumber = 0;
  }

  useEffect(() => {
    if (1 <= configNumber && configNumber <= 3) {
      import(`/sample/config0${configNumber}`).then((module) => {
        setConfigs(module.configs);
      });
    } else {
      setConfigs([]);
    }
  }, [configNumber]);
  return <div>{configs.length ? JSON.stringify(configs) : "no data"}</div>;
};

export default Page;
