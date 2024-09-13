import ImageWithText from "@/components/ImageWithText/page";
import styles from "@/styles/page.module.css";

export default function Home() {
  return (
    <div className={styles.homePage}>
      <ImageWithText
        imageUrl='/logo.jpg'
        headerText="Hi, I'm Oskar, programmer technician and web developer"
        text='I create websites, applications and develop my programming skills'
        showButton={true}           
        buttonText="Check my portfolio!"  
        buttonLink="/portfolio"      
      />
    </div>
  );
}
