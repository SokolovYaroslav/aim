import tagsService from 'services/api/tags/tagsService';
import { ITagsProps } from 'types/pages/tags/Tags';
import createModel from '../model';

const model = createModel<Partial<any>>({});

function initialize() {
  model.init();
}

function getTagsData() {
  const { call, abort } = tagsService.getTags();

  return {
    call: () =>
      call().then((data: any) => {
        model.setState({ tagsList: data });
      }),
    abort,
  };
}

const metricAppModel = {
  ...model,
  initialize,
  getTagsData,
};

export default metricAppModel;
