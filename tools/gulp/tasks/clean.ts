import {task} from 'gulp';
import {cleanTask} from '../task_helpers';
import {DIST_ROOT} from '../constants';

task('clean', cleanTask(DIST_ROOT));
