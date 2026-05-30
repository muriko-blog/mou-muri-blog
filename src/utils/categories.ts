// カテゴリー定義：slug をキーに、表示名と色を管理する
export type CategorySlug = 'food' | 'house' | 'kids' | 'living';

export interface Category {
	slug: CategorySlug;
	name: string;
	desc: string;
	icon: string;
	color: string; // メインカラー
	soft: string;  // 薄い背景用
}

export const categories: Record<CategorySlug, Category> = {
	food: {
		slug: 'food',
		name: '食',
		desc: '宅食・ミールキット・食材宅配',
		icon: '🍳',
		color: '#f4a72f',
		soft: '#fef3df',
	},
	house: {
		slug: 'house',
		name: '家事',
		desc: '家事代行・時短家電・掃除サービス',
		icon: '🧹',
		color: '#2f9e92',
		soft: '#dff2f0',
	},
	kids: {
		slug: 'kids',
		name: '子育て',
		desc: '通信教育・オンライン英会話・知育',
		icon: '🎒',
		color: '#e26a8e',
		soft: '#fbe2eb',
	},
	living: {
		slug: 'living',
		name: '暮らし',
		desc: 'ふるさと納税・写真整理・サブスク',
		icon: '🏡',
		color: '#8867c4',
		soft: '#ece3f7',
	},
};

export function getCategory(slug?: string): Category | undefined {
	if (!slug) return undefined;
	return categories[slug as CategorySlug];
}

export const categoryList: Category[] = Object.values(categories);
