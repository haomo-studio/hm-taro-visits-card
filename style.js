import Taro from '@tarojs/taro';
export default {
  hmVisitsCard: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: Taro.pxTransform(750),
    height: Taro.pxTransform(454)
  },
  cardClass: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: Taro.pxTransform(39),
    boxShadow: '0px 10px 30px rgba(209, 213, 223, 0.50)',
    backgroundColor: '#ffffff',
    width: Taro.pxTransform(721),
    height: Taro.pxTransform(376)
  },
  titleClass: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: Taro.pxTransform(62),
    paddingLeft: Taro.pxTransform(58),
    width: Taro.pxTransform(721)
  },
  text: {
    opacity: 1,
    width: Taro.pxTransform(125),
    height: Taro.pxTransform(47),
    lineHeight: Taro.pxTransform(47),
    whiteSpace: 'nowrap',
    color: '#858997',
    fontSize: Taro.pxTransform(31),
    fontWeight: 400
  },
  img: { marginTop: Taro.pxTransform(19), width: Taro.pxTransform(35), height: Taro.pxTransform(8) },
  body: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Taro.pxTransform(56),
    width: Taro.pxTransform(719)
  },
  outer: { display: 'flex', alignItems: 'flex-start', flexDirection: 'column', height: Taro.pxTransform(156) },
  wrap: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: Taro.pxTransform(6),
    height: Taro.pxTransform(41)
  },
  jiantouimg: { marginLeft: Taro.pxTransform(14), width: Taro.pxTransform(23), height: Taro.pxTransform(23) },
  num: {
    opacity: 1,
    marginLeft: Taro.pxTransform(19),
    width: Taro.pxTransform(94),
    height: Taro.pxTransform(41),
    lineHeight: Taro.pxTransform(41),
    whiteSpace: 'nowrap',
    color: '#00cd98',
    fontFamily: 'Helvetica',
    fontSize: Taro.pxTransform(27),
    fontWeight: 'normal'
  },
  block: { display: 'flex', flexDirection: 'row', marginTop: Taro.pxTransform(31) },
  nums: {
    opacity: 1,
    width: Taro.pxTransform(208),
    height: Taro.pxTransform(78),
    lineHeight: Taro.pxTransform(78),
    whiteSpace: 'nowrap',
    color: '#15181a',
    fontFamily: 'Helvetica',
    fontSize: Taro.pxTransform(62),
    fontWeight: 'normal'
  },
  unit: {
    opacity: 1,
    marginLeft: Taro.pxTransform(55),
    width: Taro.pxTransform(62),
    height: Taro.pxTransform(78),
    lineHeight: Taro.pxTransform(78),
    whiteSpace: 'nowrap',
    color: '#15181a',
    fontSize: Taro.pxTransform(62),
    fontWeight: 400
  },
  shopLogo: { marginLeft: Taro.pxTransform(6), width: Taro.pxTransform(273), height: Taro.pxTransform(136) }
};
