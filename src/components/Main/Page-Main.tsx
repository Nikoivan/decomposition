import { PropsWithChildren } from "react";

export default function PageMain({ children }: PropsWithChildren) {
  return (
    <main className="page__main">
      {children}
      <img
        src="https://an.yandex.ru/count/Wb0ejI_zOoVX2Lbx0XKI04EVTYOQbKgbKga4mNGYKgdSQG9zFfSxUxRVkVE6Er-_u_M6EzoVdnzhaL5HRjlHU_gKJfts23iwpPrG77VYDrKeAMa9wOS6af4D9MlH3rAD7w6h4TBHpmX7IIFmw3FgjF4e2MkIjKXeHX0992Cb8INhaHK9S0TCsMo2nyWzm4fV0JiZ0ayKWuwZrnaZy0GlxD5iIdPDPokYB5Quu-q75JKe7BW0BHJEhW0jj8b70Leebh40BUu5BETheagMhgWCENbEbu9ztqg7haWMg5WI8OadHGJH6Hni4Yj57eWw88kCtUm_IF1zY9Jp-OQf0pVooSQxx89XiDjorIV6tPEZTPrfrslq3MjSlDfps5mN3NUNG03mZuSljvJxlkyR3-0BmvVEfJRuX9NaN4VJ5BPD7GjcqgFYB92Xra4I81MmC5q6edNa5bRdkgRUiWlMv2wxOCrz1uxjYqLWoVsmHtk2_M0ILQxyxmxSaE_TWHlokGeGqltTprM9VQslIjFxML-LfiSq-pjccHb5NuIa6sLeC8KyUiz0zQEiJyoRcLI-V65HIvid-oumsEl7j0SNaCHjRUo_5v2L4FgH-x9dNXk0AauWltpMjn32bYkLIgMrmmOvUqc2yiCO88ggX3yjTo3yfA3GlTlOWJCijpOQhI2OJJbvllZ_7b_ER-FQCP2aDX--6gRL1G1VjdKknzTtHBtDAPAOlaBarnVzT80v4pHu5SKFZ0i4nsljxOVxxQQtCK7mDJQ6RsJdksfq_Rihz2g5O4eB~2?stat-id=1"
        alt="рекламный баннер"
      />
    </main>
  );
}
