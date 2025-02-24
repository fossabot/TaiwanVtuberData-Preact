import { h } from 'preact';
import { Activity } from './Activity';

export interface VTuberDisplayData {
  id: string;
  profileImg: h.JSX.Element | null;
  name: string;
  channelLinks: h.JSX.Element | null;
  hasYouTube: boolean;
  YouTubeSubscriberCount?: number;
  hasTwitch: boolean;
  TwitchFollowerCount: number;
  group?: string;
  nationality?: string;
  activity: Activity;
}
