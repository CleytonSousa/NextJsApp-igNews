import Head from "next/head";
import { GetStaticProps } from "next";
import { SubscribeButton } from "../components/SubscribeButton";
import styles from "./home.module.scss";
import { stripe } from "../services/stripe";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  console.log(product);
  return (
    <>
      <Head>
        <title>Home | igNews</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publication <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/avatar.svg" alt="avatar" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1K3DJcDfygar5mKWVzXHZ2Kl");
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24 //24 horas
  };
};
