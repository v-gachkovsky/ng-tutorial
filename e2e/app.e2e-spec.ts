import { NgEmpeekTaskAppPage } from './app.po';

describe('ng-empeek-task-app App', function() {
  let page: NgEmpeekTaskAppPage;

  beforeEach(() => {
    page = new NgEmpeekTaskAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
