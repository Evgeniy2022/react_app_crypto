import { Flex, Typography, Tag, Divider} from 'antd';
import CoinInfo from './CoinInfo';
const { Link } = Typography;
export default function CoinInfoModal({ coin }) {
  return (
    <>
		<CoinInfo coin={coin} withSymbol/>
      <Divider />
      <Typography.Paragraph>
        <Typography.Text strong>1 hour: </Typography.Text>
        <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>
          {coin.priceChange1h}%
        </Tag>
        <Typography.Text strong>1 day: </Typography.Text>
        <Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>
          {coin.priceChange1h}%
        </Tag>
        <Typography.Text strong>1 week: </Typography.Text>
        <Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>
          {coin.priceChange1h}%
        </Tag>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Price: </Typography.Text>
        {coin.price.toFixed(2)}$
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Price BTC: </Typography.Text>
        {coin.priceBtc}
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Market Cap: </Typography.Text>
        {coin.marketCap}
      </Typography.Paragraph>
      {coin.contractAddress && (
        <Typography.Paragraph>
          <Typography.Text strong>Contrant Adress: </Typography.Text>
          {coin.contractAddress}
        </Typography.Paragraph>
      )}
      <Typography.Paragraph>
        <Typography.Text strong>Social: </Typography.Text>
        <Link href={coin.redditUrl} target="_blank">
          {coin.redditUrl}
        </Link>
      </Typography.Paragraph>
    </>
  );
}
