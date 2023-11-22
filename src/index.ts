import { Hono as H } from 'hono';
import { Buffer as B } from 'node:buffer';
import { encode as be, decode as bd } from 'base2048';

const e = (z: string) => be(B.from(z)),
	d = (z: string) => B.from(bd(z).buffer).toString();

export default new H<{}>()
	.get('/:f{(de|en)code}/:i', ({ req, text }) => {
		const { f, i } = req.param();
		return text((f === 'encode' ? e : d)(i));
	});
