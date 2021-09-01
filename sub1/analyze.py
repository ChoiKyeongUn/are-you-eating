from parse import load_dataframes
import pandas as pd
import shutil


def sort_stores_by_score(dataframes, n=20, min_reviews=30):
    """
    Req. 1-2-1 각 음식점의 평균 평점을 계산하여 높은 평점의 음식점 순으로 `n`개의 음식점을 정렬하여 리턴합니다
    Req. 1-2-2 리뷰 개수가 `min_reviews` 미만인 음식점은 제외합니다.
    """
    stores_reviews = pd.merge(
        dataframes["stores"], dataframes["reviews"], left_on="id", right_on="store"
    )
    scores_group = stores_reviews.groupby(["store", "store_name"]).filter(lambda x: len(x) >= min_reviews).groupby(["store", "store_name"])

    scores = scores_group.mean()
    scores = scores.sort_values(by="score", ascending=False)
    return scores.head(n=n).reset_index()


def get_most_reviewed_stores(dataframes, n=20):
    """
    Req. 1-2-3 가장 많은 리뷰를 받은 `n`개의 음식점을 정렬하여 리턴합니다
    """
    stores_reviews = pd.merge(
        dataframes["stores"], dataframes["reviews"], left_on="id", right_on="store"
    )
    scores_group = stores_reviews.groupby(["store", "store_name"])['id_x'].agg([('review_count', 'count')]).sort_values(by='review_count', ascending=False)
    return scores_group.head(n=n).reset_index()

def get_most_active_users(dataframes, n=20):
    """
    Req. 1-2-4 가장 많은 리뷰를 작성한 `n`명의 유저를 정렬하여 리턴합니다.
    """
    users_reviews = pd.merge(dataframes['users'], dataframes['reviews'], left_on='id', right_on='user')
    sorted_users = users_reviews.groupby(['user', 'gender', 'age'])['id_y'].agg([('review_count', 'count')]).sort_values(by='review_count', ascending=False)

    return sorted_users.head(n=n).reset_index()

def main():
    data = load_dataframes()

    term_w = shutil.get_terminal_size()[0] - 1
    separater = "-" * term_w

    stores_most_scored = sort_stores_by_score(data)

    print("[최고 평점 음식점]")
    print(f"{separater}\n")
    for i, store in stores_most_scored.iterrows():
        print(
            "{rank}위: {store}({score}점)".format(
                rank=i + 1, store=store.store_name, score=store.score
            )
        )
    print(f"\n{separater}\n\n")

    most_reviewed_stores = get_most_reviewed_stores(data)
    print("[리뷰 많은 음식점]")
    print(f"{separater}\n")
    for i, store in most_reviewed_stores.iterrows():
        print(
            "{rank}위: {store}({count}개)".format(
                rank=i + 1, store=store.store_name, count=store.review_count
            )
        )
    print(f"\n{separater}\n\n")
    
    most_active_users = get_most_active_users(data)
    print("[리뷰 많은 유저]")
    print(f"{separater}\n")
    for i, store in most_active_users.iterrows():
        print(
            "{rank}위: {user}({count}개)".format(
                rank=i + 1, user=store.user, count=store.review_count
            )
        )
    print(f"\n{separater}\n\n")


if __name__ == "__main__":
    main()
