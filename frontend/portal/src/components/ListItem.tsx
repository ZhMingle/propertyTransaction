import { useRouter } from "next/navigation";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import styles from "./ListItem.module.css";
export default function Item() {
  const router = useRouter();
  return (
    <a className={styles.feedsContainer} onClick={() => router.push("/detail")}>
      <div className={styles.feedsImgContainer}>
        <img
          className={styles.feedsImg}
          src="https://img.alicdn.com/bao/uploaded/i3/O1CN01FU8HGT2BvFyZ3z3Zt_!!4611686018427385984-0-fleamarket.jpg_450x10000Q90.jpg_.webp"
          alt=""
        />
      </div>
      <div className={styles.feedsContent}>
        <div className={styles.mainTitle}>
          新出房源，花柯夜市旁精装四房，房东工作调动着急出手，首付8w拎包入住
        </div>
        <div>
          <span className={styles.sign}>$</span> <span>1.00</span>
          <span>m</span>{" "}
        </div>
        <div className={styles.sellerWraper}>
          <Avatar size="small" icon={<UserOutlined />} />
        </div>
      </div>
    </a>
  );
}
