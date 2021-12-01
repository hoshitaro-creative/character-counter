import { TableConfig } from "index";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

const Page = (): JSX.Element => {
  const [configs, setConfigs] = useState<TableConfig[]>([]);
  const router = useRouter();
  const { pid } = router.query;
  useEffect(() => {
    if (pid === "1" || pid === "2" || pid === "3") {
      import(`/sample/config${pid.padStart(2, "0")}`).then((module) => {
        setConfigs(module.configs);
      });
    } else {
      setConfigs([]);
    }
  }, [pid]);
  return <div>{configs.length ? JSON.stringify(configs) : "no data"}</div>;
};

export default Page;
