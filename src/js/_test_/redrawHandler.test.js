import RedrowHandler from '../RedrowHandler';
import paySistem from '../paySistem';
import WidgetStartPage from '../WidgetStartPage';

document.body.innerHTML = '<div class="validator"></div>';
const widget = new WidgetStartPage();
widget.bindToDOM(document.querySelector('.validator'));
widget.drawUI();
const handler = new RedrowHandler(widget.container, paySistem);

test('Метод addMes должен сгенерировать сообщение по переданным параметрам', () => {
  handler.addMes('Тестовое сообщение', 'colorValid', 'bgValid');
  expect(handler.mesText.textContent).toBe('Тестовое сообщение');
  expect(handler.mesText.className).toBe('text colorValid');
  expect(handler.mes.className).toBe('mes');
  expect(handler.input.className).toBe('input bgValid');
});
